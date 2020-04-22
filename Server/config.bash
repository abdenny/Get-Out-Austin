
# sequelize model:generate --name users --attributes user_first_name:string,user_last_name:string,user_email_address:string

# sequelize model:generate --name roles --attributes role_title:string

sequelize model:generate --name posts --attributes post_author:integer,post_title:string,post_description:string,post_category:string,post_images:string,post_price:integer,post_starting_date:date,post_ending_date:date,post_max_guests:integer,post_booked_guests:integer,post_min_guests:integer,post_complete:boolean

sequelize model:generate --name post_guests --attributes post_id:integer,user_id:integer,quest_count:integer,paid:boolean
