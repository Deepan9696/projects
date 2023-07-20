SELECT cd.company_name,
    u.name AS student_name
FROM company_drives cd
    JOIN attendance a ON cd.drive_date = a.class_date
    JOIN users u ON a.user_id = u.user_id
WHERE u.role = 'student';