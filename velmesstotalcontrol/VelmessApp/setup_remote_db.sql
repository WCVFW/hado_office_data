CREATE DATABASE IF NOT EXISTS velmess_total_control;
CREATE USER IF NOT EXISTS 'velmess_remote'@'%' IDENTIFIED BY 'VelMess@2024';
GRANT ALL PRIVILEGES ON velmess_total_control.* TO 'velmess_remote'@'%';
FLUSH PRIVILEGES;
