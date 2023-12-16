db.Employ.insert({
	Name : "Rehad",
	City : "Pabna",
	Position : "MERN Developer",
	Company : "None"
})

db.Employ.insertMany([
	 {
	Name : "Rehad",
	City : "Pabna",
	Position : "MERN Developer",
	Company : "None"
	},
	{
	Name : "Rehad",
	City : "Pabna",
	Position : "MERN Developer",
	Company : "None"
	}
 ])

db.getCollection("Employ").find({})
db.getCollection("Employ").aggregate([{}])
db.getCollection("Employ").find({}).count('total')

db.getCollection("Employ").aggregate([{
	$count:'total'
}])

db.getCollection("Employ").find({}).sort({Name:1})

db.getCollection("Employ").aggregate([{
	$sort: {Name:1}
}])

db.getCollection("Employ").find({}).limit(2)
db.getCollection("Employ").aggregate([{$limit:4}])
db.getCollection("Employ").find({}).sort({_id:1}).limit(3)
db.getCollection("Employ").aggregate([{$sort:{_id:1}}, {$limit:2}])
db.getCollection("Employ").find({Salary:{$gt:90000}}).limit(2)
db.getCollection("Employ").find({Salary:{$gte:90000}}).limit(2)
db.getCollection("Employ").find({Salary:{$lt:90000}}).limit(2)
db.getCollection("Employ").find({Salary:{$lte:90000}}).limit(2)
 
db.getCollection("Employ").aggregate([
{$match:{Salary:{$gt:90000}}}, 
{$limit:4}
])

db.getCollection("Employ").aggregate([
{$match:{Salary:{$gte:90000}}}, 
{$limit:4}
])

db.getCollection("Employ").aggregate([
{$match:{Salary:{$lt:90000}}},
{$limit:4}
])

db.getCollection("Employ").aggregate([
{$match:{Salary:{$lte:90000}}},
{$limit:4}
])

db.getCollection("Employ").aggregate([
{$match:{$and:[{Salary:90000}, {City:"New York"}]}}
])

db.getCollection("Employ").find({$and:[{Salary:90000}, {City:"New York"}]})
