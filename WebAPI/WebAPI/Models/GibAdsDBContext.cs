using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class GibAdsDBContext:DbContext
    {
        public GibAdsDBContext(DbContextOptions<GibAdsDBContext> options):base(options)
        {

        }

        public DbSet<Order> Orders { get; set; }
        public DbSet<Client> Clients { get; set; }
    }

}
