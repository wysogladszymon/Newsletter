from pymongo import MongoClient
''' 
How to use MongoClient


class Mongo:
  def __init__(self, password):
    self.client = MongoClient(password)

  def getDb(self, dbName):
    return self.client[dbName]
  
  def getCollection(self, db, collection):
    return self.client[db][collection]
  
  def getDbNames(self):
    return self.client.list_database_names()
  
  def getCollectionNames(self, db):
    return self.client[db].list_collection_names()
  
  def findOneInCollection(self, db, collection, props, value):
    return self.client[db][collection].find_one({props : value})

'''

class MongoNewsletter:
  def __init__(self, password):
    self.client = MongoClient(password)
    self.emails = self.client['newsletter']['emails'] 
    self.templates = self.client['newsletter']['templates'] 
    self.emails.create_index("name", unique=True)
  
  def getAllEmails(self):
    return [x['name'] for x in self.emails.find({})]
  
  def getEmail(self, value, props="name"):
    return self.emails.find({props : value})

  def addEmail(self, emailName):
    self.emails.insert_one({"name": emailName})
  
  def deleteEmail(self, emailName):
    self.emails.delete_one({"name": emailName})

  def deleteAllEmails(self):
    self.emails.delete_many({})
  
  def getAlltemplates(self):
    return self.templates.find()
  

  
def main():
  pass
  
  
if __name__ == '__main__':
  main()