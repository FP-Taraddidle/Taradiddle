class Routine < ApplicationRecord

  belongs_to :user

  has_many :blockings, dependent: :delete_all
  has_many :blocks, through: :blockings

  has_many :exercises, through: :blocks


  def self.generate
   @user = User.all
   @routines = @user.collect do |y|
      @new_routine = Routine.new
      @new_routine.user = y
      @new_routine.save!
      @tweets = @new_routine.user.twitterings.last.tweets
      @likes = @new_routine.user.twitterings.last.likes
      @block_count = @tweets + @likes
      @product = self.random_blocks.sample(@block_count).each {|x| @new_routine.blocks << x}
      UserNotifierMailer.send_email(y, @tweets, @likes).deliver
    end
  end

  def self.random_blocks
    Block.all.to_a
  end
end
