using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VirtualDars.Quiz.Backend.Models
{
    public class Quiz
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string OwnerId { get; set; }
    }
}
