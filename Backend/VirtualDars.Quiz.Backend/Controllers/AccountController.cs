using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;


namespace VirtualDars.Quiz.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        public UserManager<IdentityUser> _userManager { get; set; }
        public SignInManager<IdentityUser> _signInManager { get; set; }

        public AccountController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] Models.Credentials credentials)
        {
            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Constants.KEY_PHRASE));
            var signingCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);
            var user = new IdentityUser { UserName = credentials.Email, Email = credentials.Email };
            var claims = new Claim[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id)
            };
            var header = new JwtHeader(signingCredentials);
            var payLoad = new JwtPayload(claims);
            var jwt = new JwtSecurityToken(header, payLoad);


            var result = await _userManager.CreateAsync(user, credentials.Password);
            if (!result.Succeeded)
                return BadRequest(result.Errors);

            await _signInManager.SignInAsync(user, false);

            return Ok(new JwtSecurityTokenHandler().WriteToken(jwt));
        }
    }
}