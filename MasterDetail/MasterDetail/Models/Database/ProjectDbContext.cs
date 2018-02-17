using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MasterDetail.Models.Database
{
    public class ProjectDbContext:DbContext
    {
        public DbSet<Purchase> Purchases { get; set; }
        public DbSet<PurchaseDetails> PurchaseDetailses { get; set; }

    }
}