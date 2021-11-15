# Lab 8 - Starter
Eric Filishtiner
https://eric-filishtiner.github.io/Lab8_Starter/

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

1. Within a Github action that runs whenever code is pushed 
2. Manually run them locally before pushing code
3. Run them all after all development is completed

Answer: 1. This promotes universality and automation of testing. Otherwise, inconsistency can more easily hamper a project's progress.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
no

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
    No. There are at least two features involved in messaging - conversion, sending to and receiving by tower, and sending from the tower to the final recipient.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes. This only necessitates one check upon an attempt to send.