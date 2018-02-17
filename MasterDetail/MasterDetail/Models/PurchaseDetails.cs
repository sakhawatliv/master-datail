﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MasterDetail.Models
{
    public class PurchaseDetails
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public int Qty { get; set; }
        public double Price { get; set; }

        public Purchase Purchase { get; set; }
    }
}