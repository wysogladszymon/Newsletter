namespace backend.Models
{
    public class User
    {
        public string name { set; get; } = string.Empty;
        public User(string email)
        {
            this.name = email;
        }
    }
}
