using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Client
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName ="nvarchar(100)")]
        public string clientName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string clientEmail { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string dateOfJoining { get; set; }


        [Column(TypeName = "nvarchar(500)")]
        public string clientPhoto { get; set; }

        
    }
}
