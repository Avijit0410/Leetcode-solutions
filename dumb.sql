-- Question 1 - How do you identify duplicate records in a table?
-- find the duplicate records --use group by and then having clause
    select columnname, count(*)
    from tablename
    group by columnname --columnnmae should be present in select 
    having count > 1

--In mongodb - use aggregation pipeline to find duplicate records.
--{ $sum: 1 } means "for each document in the group, add 1 to the count."
db.collection.aggregate{[
    { $group : { _id : "$fieldname", count : {$sum : 1} } },
    { $match: { count : {$gt: 1}}}
]}


-- Question 2 - How can you delete duplicates while keeping just one entry?
--If using MySQL 8 or later, you can use ROW_NUMBER() with a Common Table Expression (CTE)
--If you are using MySQL 5.7 or earlier, you can use a self-join to delete duplicates:

-- Method 1. you can use ROW_NUMBER() with a Common Table Expression
with ranked as (
    select id, fieldname, ROW_NUMBER() OVER ( PARTITION BY fieldname ORDER BY id ) AS row_num
    FROM tablename
)
DELETE FROM tablename
WHERE id IN ( SELECT id 
            FROM ranked 
            WHERE row_num > 1 )

-- The WITH ranked CTE assigns a row number (row_num) to each duplicate record grouped by field_name.
-- PARTITION BY field_name groups records by the duplicate column.
-- ORDER BY id ensures only the first entry (smallest id) is kept.
-- The DELETE statement removes all records where row_num > 1, keeping only the first one.

-- Method 2. Using DELETE with JOIN
DELETE t1 FROM tablename t1
JOIN tablename t2
ON t1.fieldname = t2.fieldname
WHERE t1.id > t2.id
-- t1 and t2 represent the same table.
-- The JOIN matches duplicate records based on field_name.
-- WHERE t1.id > t2.id ensures that we only delete records where id is greater, keeping the one with the smallest id.


