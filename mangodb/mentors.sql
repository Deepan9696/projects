SELECT m.name AS mentor_name,
    COUNT(mr.mentee_id) AS mentee_count
FROM mentors m
    JOIN mentor_relationships mr ON m.mentor_id = mr.mentor_id
GROUP BY m.name
HAVING COUNT(mr.mentee_id) > 15;