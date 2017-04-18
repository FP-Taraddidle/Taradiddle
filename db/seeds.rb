# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#
# require 'csv'
#
# csv_text = File.read(Rails.root.join('lib', 'seeds', 'exercises.csv'))
#
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
# csv.each do |row|
#   t = Exercise.new
#   t.name = row['name']
#   t.description  = row['description']
#   t.picture = row['picture']
#   t.save!
# end

  # Intensity.create(name: "Very Easy", level: 6)
  # Intensity.create(name: "Easy", level: 5)
  # Intensity.create(name: "Medium", level: 4)
  # Intensity.create(name: "Hard", level: 3)
  # Intensity.create(name: "Very Hard", level: 2)

  def random_exercise_blocks
    ex = Exercise.all.to_a
    ex.sample(2)
  end

  126.times do
    block = Block.new
    block.exercises = random_exercise_blocks
    block.save!
    end








# for each intensity, make 20 blocks,
  # for each block, (60) divided by (the intensity level)
  # grab that many ^^ of a random exercise id and shove it into the block
  # repeat that a second time but do not select the same exercise id as the first
