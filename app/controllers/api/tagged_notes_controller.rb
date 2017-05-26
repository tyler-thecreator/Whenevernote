class Api::TaggedNotesController < ApplicationController
  def create
    @tagged_note = TaggedNote.new(tagged_notes_params)

    if @tagged_note.save
      render 'api/tagged_notes/show'
    else
      render json: @tagged_note.errors.full_messages, status: 422
    end
  end

  def destroy
    @tagged_note = TaggedNote.find_by(
      note_id: params[:tagged_note][:note_id],
      tag_id: params[:tagged_note][:tag_id]
    )

    if @tagged_note && @tagged_note.note.author.id == current_user.id
      @tagged_note.delete
      render 'api/tagged_notes/show'
    else
      render json: ['Something went wrong :(']
    end
  end

  private

  def tagged_notes_params
    params.require(:tagged_note).permit(:tag_id, :note_id)
  end
end
