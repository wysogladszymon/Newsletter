using MongoDB.Driver;
using backend.Models;

namespace backend.Services
{
    public class UserService
    {
        private readonly IMongoCollection<User> _emails;

        //public UserService() { }

        public UserService(string mongoUri, string dbName)
        {
            var client = new MongoClient(mongoUri);
            var db = client.GetDatabase(dbName);
            _emails = db.GetCollection<User>("emails");
        }

        public List<User> GetAllEmails()
        {
            return this._emails.Find(e => true).ToList();
        }

        public void AddEmail(User user)
        {
            _emails.InsertOne(user);
        }

        public void RemoveEmails(string email)
        {
            _emails.DeleteOne(e => e.name == email);
        }

    }
}
