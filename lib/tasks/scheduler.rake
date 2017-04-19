desc "This task pulls Twitter information."

task :pull_twitter => :environment do
  puts "Pulling Twitter Data..."
  Twittering.pull
  puts "done."
end

task :make_routine => :environment do
  puts "Making routines for the users ..."
  Routine.make
  puts "done."
end
