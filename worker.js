self.onmessage = async function(event) {
    if (event.data === 'fetchTodos') {
      try {
        // Simulate a long-running asynchronous operation
        await new Promise(resolve => setTimeout(resolve, 5000));
  
        // Fetching data from an API
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const todos = await response.json();
  
        // Send the fetched todos back to the main thread
        self.postMessage({ status: 'success', todos: todos });
      } catch (error) {
        // Send the error message back to the main thread
        self.postMessage({ status: 'error', message: error.message });
      }
    }
  };  