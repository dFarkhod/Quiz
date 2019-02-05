using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VirtualDars.Quiz.Backend.Models;

namespace VirtualDars.Quiz.Backend
{
    public class QuizContext : DbContext
    {
        public QuizContext(DbContextOptions<QuizContext> options) : base(options)
        {

        }

        public DbSet<Question> Questions { get; set; }
    }
}
