SELECT t.topic_name,
    ts.task_name
FROM topics t
    JOIN tasks ts ON t.topic_id = ts.topic_id
WHERE EXTRACT(
        MONTH
        FROM ts.deadline
    ) = 10;