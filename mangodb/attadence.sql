SELECT COUNT(u.name) AS absent_users_count
FROM users u
    LEFT JOIN attendance a ON u.user_id = a.user_id
    LEFT JOIN tasks t ON a.class_date = t.deadline
WHERE a.is_present = false
    AND (
        t.deadline BETWEEN '2020-10-15' AND '2020-10-31'
        OR t.deadline IS NULL
    );