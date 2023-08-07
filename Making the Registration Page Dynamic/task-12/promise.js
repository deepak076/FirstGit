let lastActivityTime = new Date("2023-08-07T10:00:00"); // Replace with your desired initial value

function updateLastUserActivityTime(userId) {
  return new Promise((resolve, reject) => {
    // Simulate updating the user's last activity time
    setTimeout(() => {
      const currentTime = new Date();
      lastActivityTime = currentTime;
      resolve('User activity time updated successfully');
    }, 1000); // Simulating a 1-second delay
  });
}

// Function to create a post and update user's last activity time
function createPost(userId, postContent) {
  return new Promise((resolve, reject) => {
    // Log the user's last activity time before creating the post
    console.log(`Before creating post - Last activity time for user ${userId}:`, lastActivityTime);

    // Simulate creating a post
    console.log(`User ${userId} created a post: ${postContent}`);
    
    // Update user's last activity time
    updateLastUserActivityTime(userId)
      .then(result => {
        console.log(result);
        // Log the user's last activity time after creating the post
        console.log(`After creating post - Last activity time for user ${userId}:`, lastActivityTime);
        resolve();
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
}

// Example usage
const userId = 123;
const postContent = "Hello, world!";

createPost(userId, postContent)
  .then(() => {
    console.log('Post creation and activity update completed.');
  })
  .catch(error => {
    console.error('Error occurred during post creation and activity update:', error);
  });
