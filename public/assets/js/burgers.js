// wait until DOM is loaded
document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.log('DOM loaded');
  }

  // UPDATE
  const devourBtns = document.querySelectorAll('.devour');

  if (devourBtns) {
    devourBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');

        const devourState = {
          devoured: true,
        };

        fetch(`/api/burgers/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(devourState),
        }).then((response) => {
          if (response.ok) {
            console.log('changed to devoured');
            location.reload('/');
          } else {
            alert('something went wrong!');
          }
        });
      });
    });
  }
})
