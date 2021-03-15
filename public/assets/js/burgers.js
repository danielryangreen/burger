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

  // CREATE
  const addBtn = document.getElementById('form');

  if (addBtn) {
    addBtn.addEventListener('submit', (e) => {
      e.preventDefault();

      const newBurger = {
        burgerName: document.getElementById('burgerName').value.trim(),
        devoured: false,
      };

      fetch('/api/burgers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBurger),
      }).then(() => {
        document.getElementById('burgerName').value = '';
        console.log('added a new burger');
        location.reload();
      });
    });
  }

});
