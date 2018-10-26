INSERT INTO login (email, password, type) VALUES ('guyincognito@gmail.com',     'Password123!', '0');
INSERT INTO login (email, password, type) VALUES ('davedavidson@gmail.com',     'Password123!', '0');
INSERT INTO login (email, password, type) VALUES ('sallymcsallyface@gmail.com', 'Password123!', '0');
INSERT INTO login (email, password, type) VALUES ('chandralevy@gmail.com',      'Password123!', '0');
INSERT INTO login (email, password, type) VALUES ('chestrockwell@gmail.com',    'Password123!', '0');
INSERT INTO login (email, password, type) VALUES ('sweatshop@gmail.com',        'Password123!', '1');
INSERT INTO login (email, password, type) VALUES ('fastlane@gmail.com',         'Password123!', '1');
INSERT INTO login (email, password, type) VALUES ('luxe@gmail.com',             'Password123!', '1');
INSERT INTO login (email, password, type) VALUES ('radiobox@gmail.com',         'Password123!', '1');
INSERT INTO login (email, password, type) VALUES ('rawk@gmail.com',             'Password123!', '1');

INSERT INTO user (first_name, last_name, email) VALUES ('Guy',     'Incognito',   'guyincognito@gmail.com');
INSERT INTO user (first_name, last_name, email) VALUES ('Dave',    'Davidson',    'davedavidson@gmail.com');
INSERT INTO user (first_name, last_name, email) VALUES ('Sally',   'McSallyface', 'sallysallyface@gmail.com');
INSERT INTO user (first_name, last_name, email) VALUES ('Chandra', 'Levy',        'chandralevy@gmail.com');
INSERT INTO user (first_name, last_name, email) VALUES ('Chest',   'Rockwell',    'chestrockwell@gmail.com');

INSERT INTO studio (name,address_1,address_2,city,state, zip, email, description, price, equipment) VALUES ('Sweatshop', '244 Meserole Ave', '',             'Brooklyn', 'NY', '11209', 'sweatshop@gmail.com', 'An awesome studio that smells terrible',  '20.00',  'Guitar, Bass, Drums, PA, Triangle');
INSERT INTO studio (name,address_1,address_2,city,state, zip, email, description, price, equipment) VALUES ('Fastlane',  '887 Studio Ave',   'Suite 200',    'Brooklyn', 'NY', '11209', 'fastlane@gmail.com',  'An ok studio that smells pretty good',    '20.00' , 'Guitar, Bass, PA');
INSERT INTO studio (name,address_1,address_2,city,state, zip, email, description, price, equipment) VALUES ('Luxe',      '114 Broadway',     'Suite 100',    'New York', 'NY', '11001', 'luxe@gmail.com',      'An amazing studio that smells terrific.', '620.00', 'Every instrument, gold plated with diamonds');
INSERT INTO studio (name,address_1,address_2,city,state, zip, email, description, price, equipment) VALUES ('Radiobox',  '447 Skid Row',     '',             'Queens',   'NY', '11102', 'radiobox@gmail.com',  'A terrible studio that smells terrific.', '40.00',  'Guitar, Bass, Drums, PA');
INSERT INTO studio (name,address_1,address_2,city,state, zip, email, description, price, equipment) VALUES ('Rawk',      '123 Fake Street',  'Suite 76',     'New York', 'NY', '11001', 'rawk@gmail.com',      'A terrible studio that smells terrible.', '4.00',   'Nothing! Brink your own crap!');

INSERT INTO schedule (studio_id, last_name, email, appt_date, appt_time) VALUES ('1', 'Incognito', 'guyincognito@gmail.com',     '2018-9-23', "22:00");
INSERT INTO schedule (studio_id, last_name, email, appt_date, appt_time) VALUES ('2', 'Davidson',  'davedavidson@gmail.com',     '2018-9-21', "12:00");
INSERT INTO schedule (studio_id, last_name, email, appt_date, appt_time) VALUES ('3', 'Sallyface', 'sallymcsallyface@gmail.com', '2018-9-24', "08:00");
INSERT INTO schedule (studio_id, last_name, email, appt_date, appt_time) VALUES ('4', 'Levy',      'chandralevy@gmail.com',      '2018-9-22', "21:00");
INSERT INTO schedule (studio_id, last_name, email, appt_date, appt_time) VALUES ('5', 'Rockwell',  'chestrockwell@gmail.com',    '2018-9-21', "23:00");



