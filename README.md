# libraryExercise

This is a personal exercise for practicing writing a web application.
This project tries to build a library system to managing book information and user information.

There will be three types of users with different authorities to look for book information. (admin, member, visitor)
admins can create books, delete books, update information, search books, search booking records from the perspectve of books.
members can search books, look the detail of the book, borrow books, reserve books.
visitors can only search and read details of books.

Each member can borrow at most 5 books at the same time, if the member wish to borrow more books, the alert box will appear.
One available book can only be borrowed by one member. The member who requests it will be added to the waiting list.
