# Todo List Website

This is a simple "Todo List" website built using Django and SQLite.

## Installation and Setup

Follow the steps below to set up and run the website:

1. Install Python and Django from your browser.
2. Create a folder and open it in the terminal.
3. Create a virtual environment using the command:
   ```sh
   pip install virtualenv
   ```
   Then run:
   ```sh
   virtualenv projet
   ```
4. Move to the `bin` folder and activate the virtual environment using the command:
   ```sh
   ./activate
   ```
5. Move out of the `bin` folder and install Django in the virtual environment:
   ```sh
   pip install Django
   ```
6. Create a Django project using the command:
   ```sh
   django-admin startproject Todo
   ```
   Move into your Django project:
   ```sh
   cd Todo
   ```
7. Create a Django app using the command:
   ```sh
   python manage.py startapp todoApp
   ```
   Add the app to `INSTALLED_APPS` in `Todo/settings.py`.

8. Add a `urls.py` file for your app.
9. Create separate folders:
   - `Templates` (for HTML files)
   - `Static` (for CSS and script files)
10. Copy the code from the provided Git repository into your project files.
11. Ensure you add the following in `settings.py`:
    ```python
    import os
    ```
    Also, register the model in `admin.py`.
12. Run the following commands to apply migrations:
    ```sh
    python manage.py makemigrations
    python manage.py migrate
    ```
13. Create an admin user by running:
    ```sh
    python manage.py createsuperuser
    ```
    Follow the prompts to create a username and password for database access.
14. Start the server using:
    ```sh
    python manage.py runserver
    ```
15. Open the website by pasting the localhost link shown in the terminal:
    ```
    http://127.0.0.1:8000/
    ```
16. Access the admin panel using the following link:
    ```
    http://127.0.0.1:8000/admin/
    ```
    Log in using the superuser credentials created earlier.

## File Structure

These are the files you need to update:
```
projet
|-Templates
     |-Home.html
|-static
   |-scripts
      |-confeti.js
   |-styles.css
|-Todo
   |-settings.py
   |-urls.py
|-todoApp
   |-admin.py
   |-models.py
   |-views.py
   |-urls.py
```

