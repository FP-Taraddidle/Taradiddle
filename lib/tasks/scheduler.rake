desc "This task pulls Twitter information."

task :pull_twitter => :environment do
  puts "Pulling Twitter Data..."
  User.all.eachTwitterings.create
  puts "done."
end

# task :send_reminders => :environment do
#   User.send_reminders
# end
