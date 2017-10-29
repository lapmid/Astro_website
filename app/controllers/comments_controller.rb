class CommentsController < InheritedResources::Base

     

  # GET /comments/1
  # GET /comments/1.json
  def show
     
  end

  # GET /comments/new
  def new
    @comment = Comment.new
     
  end

  # GET /comments/1/edit
  def edit
  end

  # Comment /comments
  # Comment /comments.json
  def create
    @comment = Comment.new(comment_params)
      
    
      if @comment.save
        flash[:success]="succesfully Submited"
        redirect_to posts_path
        
      else
        render :new 
        
      end
    
  end

  # PATCH/PUT /comments/1
  # PATCH/PUT /comments/1.json
  def update
   
      if @comment.update(comment_params)
        flash[:success]="succesfully Submited"
        redirect_to posts_path
        
      else
       render :edit
         end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    @comment.destroy
    respond_to do |format|
      format.html { redirect_to comments_url, notice: 'Comment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_Comment
      @comment = Comment.find(params[:id])
    end

  private

    def comment_params
      params.require(:comment).permit(:title, :body)
    end
end

