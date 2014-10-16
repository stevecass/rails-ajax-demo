# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ages = (1..6).to_a
names = ['Daisy', 'Flossy', 'Ermintrude', 'Cookie']
breeds = ['Ayrshire', 'Brown Swiss', 'Jersey', 'Kerry', 'Holstein', 'Fresian']

8.times do
  Cow.create(name: names.sample, age: ages.sample, breed:breeds.sample)
end