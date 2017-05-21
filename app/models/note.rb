# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  body        :text             not null
#  author_id   :integer          not null
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord
  validates :title, :body, :author, :notebook, presence: true

  belongs_to :author,
             primary_key: :id,
             foreign_key: :author_id,
             class_name: :User

  belongs_to :notebook
end
