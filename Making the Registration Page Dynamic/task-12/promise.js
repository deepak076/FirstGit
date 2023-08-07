function updateLastUserActivityTime(userId) {
    return new Promise((resolve, reject) => {
      // Simulate updating the user's last activity time
      setTimeout(() => {
        const success = true; // Replace this with your actual success condition
        if (success) {
          resolve('User activity time updated successfully');
        } else {
          reject(new Error('Failed to update user activity time'));
        }
      }, 1000); // Simulating a 1-second delay
    });
  }
  
  // Function to create a post and update user's last activity time
  async function createPost(userId, postContent) {
    try {
      // Log the user's last activity time before creating the post
      console.log(`Before creating post - Last activity time for user ${userId}:`, new Date());
      
      // Simulate creating a post
      console.log(`User ${userId} created a post: ${postContent}`);
      
      // Update user's last activity time
      const result = await updateLastUserActivityTime(userId);
      console.log(result);
  
      // Log the user's last activity time after creating the post
      console.log(`After creating post - Last activity time for user ${userId}:`, new Date());
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  // Function to delete a post
  async function deletePost(postId) {
    try {
      // Simulate deleting a post
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating a 1-second delay
      const success = true; // Replace this with your actual success condition
      if (success) {
        return `Post ${postId} deleted successfully`;
      } else {
        throw new Error(`Failed to delete post ${postId}`);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  // Example usage
  const userId = 123;
  const postContent = "Hello, world!";
  
  (async () => {
    try {
      await createPost(userId, postContent);
      
      console.log('Post creation and activity update completed.');
      
      const deleteResult = await deletePost('post-id-to-delete');
      console.log(deleteResult);
      
      console.log('Post deletion completed.');
    } catch (error) {
      console.error('An error occurred:', error);
    }
  })();
  
