-- SQL Insert Statements for Phone Products
-- This file contains INSERT statements to add mobile phone products from the Cellular Hub shop page
-- into the Products table of the 'phone_database_products' database.
-- Note: If you are experiencing connection issues with VSCode extensions (e.g., 'Access denied' or 'Unknown database'), follow these detailed steps to execute this script:
-- CRITICAL: The error 'MySQL Error (1049): Unknown database 'phone_database_products'' means the database does not exist yet on your MySQL server. You MUST create the database before running any queries or updating connection settings. Follow Step 1 below to create it FIRST.
-- Additionally, 'Access denied' errors suggest incorrect credentials or MySQL server issues. Ensure MySQL server is running and credentials are correct.

-- Immediate Action: Create and Use the Database (Run this first if you encounter 'Unknown database' error)
-- Highlight and execute the following two lines in your query editor before proceeding with any other steps or queries:
CREATE DATABASE IF NOT EXISTS phone_database_products;
USE phone_database_products;
-- If you are using a GUI tool or terminal, run these commands to ensure the database exists and is selected.

-- Step 1: Create the Database First
-- Option A: Using Terminal/Command Prompt
--    - Open a terminal or command prompt.
--    - Log in to MySQL: mysql -u root -p -P 3307
--    - Enter your password when prompted.
--    - Create the database: CREATE DATABASE phone_database_products;
--    - Exit MySQL: EXIT;
-- Option B: Using an Existing Connection in VSCode
--    - Click on the connection "Database root@localhost:3307/phone_products" in the left panel.
--    - Open a new query editor.
--    - Run the query: CREATE DATABASE phone_database_products;

-- Step 2: Update Database Connection
-- After creating the database, use one of these methods:
-- Method 1: Edit Existing Connection
--    - Right-click on the existing connection in VSCode.
--    - Select "Edit Connection".
--    - Change the Database field from "phone_products" to "phone_database_products".
--    - Test the connection.
-- Method 2: Create a New Connection
--    - Create a new connection with the same settings.
--    - Ensure the Database field is set to: phone_database_products.

-- Step 3: Import Data (If You Have an SQL File)
-- If you have the file phone_database_products.sql in your project, run this command in a terminal:
--    mysql -u root -p -P 3307 phone_database_products < "d:/UIN JAKARTA/Semester 2/Sistem Informasi Manajemen (Prof Syopiansyah)/tp-2.-sementara-project/database/phone_database_products.sql"
--    Enter your password when prompted.
-- Alternatively, use one of the methods below to execute this script directly.

-- Step 4: Verify Database Availability
-- To ensure the database exists, run this query in your MySQL tool or VSCode query editor:
--    SHOW DATABASES;
-- You should see 'phone_database_products' in the list of databases.

-- Step 5: Methods to Execute This Script
-- 1. Using MySQL Workbench or Another GUI Tool (Recommended if available):
--    - Open MySQL Workbench or any other MySQL GUI tool you have installed.
--    - Connect to your local MySQL server using the correct credentials (host: localhost, user: root, password, port: 3307 or 3306).
--    - Select the 'phone_database_products' database or create it if it doesn't exist (File > New Query Tab, then run 'CREATE DATABASE IF NOT EXISTS phone_database_products; USE phone_database_products;').
--    - Open this file in the tool or copy-paste the content into a new query tab.
--    - Execute the script to insert the data.
-- 2. Using VSCode MySQL or SQLTools Extension (If connection issues are resolved):
--    - Open the extension panel (look for 'MySQL' or 'SQLTools' in the activity bar).
--    - Ensure correct credentials and settings (host: localhost, user: root, correct password, database: phone_database_products, port: 3307 or 3306).
--    - If 'Access denied' error persists, double-check your password, ensure MySQL server is running, or reset the password in MySQL.
--    - If 'Unknown database' error occurs, update the connection settings to use 'phone_database_products' as the database name, or run 'CREATE DATABASE IF NOT EXISTS phone_database_products; USE phone_database_products;' as a query first.
--    - Open this file, highlight all content or specific INSERT statements, then right-click and select 'Run Query' or 'Execute Query'.
-- 3. Manual Command-Line Approach (If MySQL bin directory is accessible):
--    - If 'mysql' command is not recognized, locate the MySQL bin directory (e.g., C:\Program Files\MySQL\MySQL Server X.X\bin).
--    - Open a command prompt in that directory or add it to your system PATH.
--    - Run: mysql -h localhost -u root -p -P 3307 phone_database_products < "d:/UIN JAKARTA/Semester 2/Sistem Informasi Manajemen (Prof Syopiansyah)/tp-2.-sementara-project/database/phone_database_products.sql"
--    - Enter the password when prompted.

-- Step 6: Troubleshooting MySQL Server and SQLTools Issues
-- If you still encounter errors:
--    - Ensure the MySQL server is running on your system (check services or task manager for 'MySQL' or use a tool like XAMPP/WAMP if installed).
--    - Verify the server is started, and the credentials (username/password) are correct.
--    - Make sure the MySQL server is running on port 3307. If 3307 doesn't work, try the default port 3306.
--    - Check if the user 'root' has permission to create databases. If necessary, reset the root password or create a new user with appropriate privileges in MySQL.
--    - For SQLTools extension issues in VSCode:
--      - Ensure SQLTools and the MySQL driver are installed and up to date (go to Extensions view, search for 'SQLTools' and 'SQLTools MySQL/MariaDB/TiDB', and update or reinstall if needed).
--      - Check SQLTools connection settings (in the SQLTools panel, click on the connection, and verify host, port, username, password, and database name). Ensure the database name is set to 'phone_database_products' or leave it blank if the database doesn't exist yet.
--      - Address "Unknown database" errors by creating the database first (see Step 1) or updating the connection settings to use an existing database name.
--      - Address "Access denied" errors by double-checking the password. If the issue persists, reset the MySQL root password or use a different user account with correct credentials.
--      - Address "X Protocol" errors by changing the authentication protocol in SQLTools settings. Edit the connection, go to advanced settings, and set the authentication protocol to 'default' instead of 'xprotocol'.
--      - If SQLTools fails to connect, try restarting VSCode after updating settings or reinstalling the extension.
--      - Review SQLTools logs for detailed error messages (go to View > Output, then select 'SQLTools' from the dropdown on the right to see logs).
--      - If issues persist, consider using an alternative method like MySQL Workbench or the command-line approach described above.

-- Ensure you are using the correct database
USE phone_database_products;

-- Create the Products table if it doesn't exist (based on the schema from shop_database_schema.sql)
CREATE TABLE IF NOT EXISTS Products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL DEFAULT 0,
    category VARCHAR(100),
    image_url VARCHAR(500),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert phone products into the Products table
INSERT INTO Products (name, description, price, stock_quantity, category, image_url, is_active) VALUES
('Xiaomi Redmi 12C', 'Smartphone dengan chipset MediaTek Helio G85', 1499000.00, 25, 'Electronics', 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/109/MTA-98183665/xiaomi_xiaomi_redmi_12c_-_4gb-128gb_full02_gofnp0zg.jpg', TRUE),
('Samsung Galaxy A04s', 'Smartphone dengan chipset Exynos 850', 2199000.00, 25, 'Electronics', 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/99/MTA-103398900/samsung_samsung_galaxy_a04s_4-64gb_garansi_resmi_full10_foe91ze7.jpg', TRUE),
('Realme C55', 'Smartphone dengan chipset MediaTek Helio G88', 2899000.00, 25, 'Electronics', 'https://cellplanetphones.com/wp-content/uploads/2023/11/REALME-c55-6128-GOLD.jpg', TRUE),
('Xiaomi Redmi Note 12 Pro', 'Smartphone dengan chipset MediaTek Dimensity 1080', 4699000.00, 25, 'Electronics', 'https://cdnpro.eraspace.com/media/catalog/product/r/e/redmi_note_12_pro_5g_sky_blue_0_1.jpg', TRUE),
('Samsung Galaxy A54 5G', 'Smartphone dengan chipset Exynos 1380', 5999000.00, 25, 'Electronics', 'https://down-id.img.susercontent.com/file/id-11134207-7qukx-lh47ajaeo14j63', TRUE),
('OPPO Reno8 T', 'Smartphone dengan chipset MediaTek Helio G99', 4499000.00, 25, 'Electronics', 'https://image.oppo.com/content/dam/oppo/common/mkt/specs/reno8-t/reno8-t.png', TRUE),
('Vivo V27e', 'Smartphone dengan chipset MediaTek Helio G99', 4999000.00, 25, 'Electronics', 'https://down-id.img.susercontent.com/file/id-11134207-7qul1-libegqrj77vn9c', TRUE),
('Xiaomi 13T Pro', 'Smartphone dengan chipset MediaTek Dimensity 9200+', 9999000.00, 25, 'Electronics', 'https://www.yaphone.com/5815-large_default/xiaomi-mi-13t-pro-5g.jpg', TRUE),
('Samsung Galaxy S23 FE', 'Smartphone dengan chipset Exynos 2200', 8999000.00, 25, 'Electronics', 'https://indodana-web.imgix.net/product-installment/smartphone/samsung-s23-fe-mint-thumbnail.png?auto=compress', TRUE),
('iPhone 14', 'Smartphone dengan chipset Apple A15 Bionic', 13999000.00, 25, 'Electronics', 'https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_14_purple_1_1.jpg&w=3840&q=45', TRUE),
('Samsung Galaxy S24 Ultra', 'Smartphone dengan chipset Snapdragon 8 Gen 3', 19999000.00, 25, 'Electronics', 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/114/MTA-158938197/samsung_samsung_galaxy_s24_ultra_5g_ram_12-256gb_-_garansi_resmi_full02_eth8va06.jpg', TRUE),
('iPhone 15 Pro Max', 'Smartphone dengan chipset Apple A17 Pro', 21999000.00, 25, 'Electronics', 'https://storage.googleapis.com/download/storage/v1/b/xooply-static-production/o/dev%2Fapple_iphone_15_pro_max_blue_titanium_1_3.jpg-hkH9Rr.jpg?generation=1708331292758789&alt=media', TRUE),
('ASUS ROG Phone 7', 'Smartphone dengan chipset Snapdragon 8 Gen 2', 12999000.00, 25, 'Electronics', 'https://www.softcom.co.id/wp-content/uploads/2023/07/rog7.jpg', TRUE),
('RedMagic 8 Pro', 'Smartphone dengan chipset Snapdragon 8 Gen 2', 9999000.00, 25, 'Electronics', 'https://down-id.img.susercontent.com/file/sg-11134201-7qvf1-lftt8auidtxcff', TRUE),
('OPPO Find X7', 'Smartphone dengan chipset MediaTek Dimensity 9200', 10999000.00, 25, 'Electronics', 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/106/MTA-155634469/oppo_oppo_find_x7_5g_ram_12-256_gb_full01_4a5fd654.jpg', TRUE),
('realme GT 6', 'Smartphone dengan chipset Qualcomm Snapdragon 8s Gen 3', 7499000.00, 25, 'Electronics', 'https://cdnpro.eraspace.com/media/catalog/product/r/e/realme_gt_6_razor_green_1_1.jpg', TRUE),
('Samsung Galaxy A55 5G', 'Smartphone dengan chipset Exynos 1480 (4 nm)', 5399000.00, 25, 'Electronics', 'https://img.global.news.samsung.com/id/wp-content/uploads/2024/03/11161611/SM-A356_Galaxy-A35_Awesome-Lilac_Front-1.jpg', TRUE),
('Redmi Note 14 Pro 5G', 'Smartphone dengan chipset MediaTek Dimensity 7300 Ultra', 3999000.00, 25, 'Electronics', 'https://i02.appmifile.com/800_item_id/09/01/2025/d92eb577bb57d6a66b869ef48e36411e!800x800!85.png', TRUE),
('Infinix Note 40 Pro 5G', 'Smartphone dengan chipset MediaTek Dimensity 7020', 3149000.00, 25, 'Electronics', 'https://down-id.img.susercontent.com/file/id-11134207-7r990-lx6wfsd9g6qm7d', TRUE);

-- End of Insert Statements
