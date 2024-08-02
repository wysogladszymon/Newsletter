using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using backend.Classes;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // route api/User
    public class UserController : Controller
    {
        private readonly UserService _userService;

        public UserController(UserService uS) 
        { 
            _userService = uS;
        }
        [HttpPost("{email}")]
        public IActionResult AddNewUser(string email)
        {
            if (!EmailValidator.IsValidEmail(email))
            {
                var response = new
                {
                    status = "Error",
                    msg = "Incorrect Email!"
                };
                return Ok(response);
            }
            if (_userService.doExist(email))
            {
                var response = new
                {
                    status = "Error",
                    msg = "Email already exist!"
                };
                return Ok(response);
            }

            try
            {

                var user = new User(email);
                _userService.AddEmail(user);
                var response = new
                {
                    status = "Success",
                    msg = "Email succesfully added to newsletter!"
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                var errorResponse = new
                {
                    status = "Error",
                    msg = "An error occurred while adding the email!"
                };
                return StatusCode(500, errorResponse);
            }
        }
    }
}
