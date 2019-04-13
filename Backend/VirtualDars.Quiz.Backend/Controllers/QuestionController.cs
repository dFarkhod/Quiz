using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VirtualDars.Quiz.Backend.Models;

namespace VirtualDars.Quiz.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly QuizContext _context = null;

        public QuestionController(QuizContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Question question)
        {
            var quiz = _context.Quiz.SingleOrDefault(q => q.Id == question.QuizId);
            if (quiz == null)
                return NotFound();

            _context.Questions.Add(question);
            await _context.SaveChangesAsync();
            return Ok(question);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Question question)
        {
            if (id != question.Id)
                return BadRequest();

            _context.Entry(question).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return Ok(question);
        }

        [HttpGet]
        public ActionResult<IEnumerable<Question>> Get()
        {
            return _context.Questions;
        }

        [HttpGet("{quizId}")]
        public ActionResult<IEnumerable<Question>> Get([FromRoute] int quizId)
        {
            return _context.Questions.Where(q => q.QuizId == quizId).ToList();
        }
    }
}