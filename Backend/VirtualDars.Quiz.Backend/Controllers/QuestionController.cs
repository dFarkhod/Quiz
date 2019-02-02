﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VirtualDars.Quiz.Backend.Models;

namespace VirtualDars.Quiz.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        [HttpPost]
        public void Post([FromBody] Question quesion)
        {
        }

        [HttpGet]
        public ActionResult<IEnumerable<Question>> Get()
        {
            return new Question[] {
                new Question { Text = "Git'ning asoschisi kim"},
                new Question { Text = "Yer Quyosh tizimidagi nechansi sayyora"}
            };
        }
    }
}