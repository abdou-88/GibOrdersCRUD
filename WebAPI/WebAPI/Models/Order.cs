using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Order
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName ="nvarchar(10)")]
        public string clientID { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string orderType { get; set; }

        [Column(TypeName = "varchar(MAX)")]
        public string oImagePath { get; set; }


        [Column(TypeName = "varchar(MAX)")]
        public string oVideoPath { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string locationId { get; set; }

        [Column(TypeName = "varchar(MAX)")]
        public string oComment { get; set; }
    }
}
