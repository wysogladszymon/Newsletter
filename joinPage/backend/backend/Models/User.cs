using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace backend.Models
{
    public class User
    {
        [BsonId]
        public ObjectId Id { get; set; }  

        [BsonElement("name")]
        public string Name { get; set; } = string.Empty;

        public User() { }

        public User(string name)
        {
            this.Name = name;
        }
    }
}
