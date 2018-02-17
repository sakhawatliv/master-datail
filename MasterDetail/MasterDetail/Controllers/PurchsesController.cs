using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MasterDetail.Models;
using MasterDetail.Models.Database;

namespace MasterDetail.Controllers
{
    public class PurchsesController : Controller
    { 
        ProjectDbContext _db = new ProjectDbContext();
        // GET: Purchses
        public ActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Create(Purchase purchase)
        {
            if (ModelState.IsValid && purchase.PurchaseDetailses != null && purchase.PurchaseDetailses.Count > 0)
            {
                _db.Purchases.Add(purchase);
                var isPurchaseAdded = _db.SaveChanges() > 0;
                if (isPurchaseAdded)
                {
                    return View(purchase);
                }
                
            }
            return View();
        }
    }
}