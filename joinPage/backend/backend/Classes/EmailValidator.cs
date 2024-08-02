using System;
using System.Text.RegularExpressions;

namespace backend.Classes
{
    public class EmailValidator
    {
        public static bool IsValidEmail(string email)
        {
            string pattern = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
            var regex = new Regex(pattern);
            return regex.IsMatch(email);
        }
    }
}
