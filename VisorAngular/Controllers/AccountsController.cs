﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using VisorAngular.Data;
using VisorAngular.Helpers;
using VisorAngular.Models;
using VisorAngular.ViewModels;

namespace VisorAngular.Controllers
{
    [Produces("application/json")]
    [Route("api/Accounts")]
    public class AccountsController : Controller
    {
        private readonly ApplicationDbContext _appDbContext;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IMapper _mapper;

        public AccountsController(UserManager<ApplicationUser> userManager, IMapper mapper, ApplicationDbContext appDbContext)
        {
            _userManager = userManager;
            _mapper = mapper;
            _appDbContext = appDbContext;
        }

        [HttpGet("[action]")]
        public IActionResult Listar() {

            //var data =  new[] { new { FirstName = "Alex", LastName = "DeLarge" }, new { FirstName = "Alex", LastName = "DeLarge" } };
            var data = _appDbContext.Users;
            return Json(data);
        }

        // POST api/accounts/create
        [HttpPost("[action]")]
        public async Task<IActionResult> Create([FromBody]RegistrationViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = _mapper.Map<ApplicationUser>(model);

            var result = await _userManager.CreateAsync(userIdentity, model.Password);

            if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

            //await _appDbContext.Customers.AddAsync(new Customer { IdentityId = userIdentity.Id, Location = model.Location });
            //await _appDbContext.SaveChangesAsync();

            return new OkObjectResult("Account created");
        }
    }
}