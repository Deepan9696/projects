SELECT u.name AS user_name,
    COUNT(ck.problem_solved) AS problems_solved
FROM users u
    LEFT JOIN codekata ck ON u.user_id = ck.user_id
GROUP BY u.name;