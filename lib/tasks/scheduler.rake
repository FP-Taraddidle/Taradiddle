desc "This task pulls Twitter information."

task :pull_twitter => :environment do
  puts "Pulling Twitter Data..."
  Twittering.pull
  puts "done."
end
