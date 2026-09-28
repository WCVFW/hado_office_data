-- Insert sample users
INSERT INTO users (id, full_name, email, password, phone_number, role, is_active, email_verified, created_at, updated_at) VALUES
('u1', 'Admin User', 'admin@freshmeals.com', '$2a$10$DowJonesIndex.', '+1234567890', 'ADMIN', true, true, NOW(), NOW()),
('u2', 'Demo User', 'user@freshmeals.com', '$2a$10$DemoPasswordHash.', '+1234567891', 'USER', true, true, NOW(), NOW()),
('u3', 'John Doe', 'john.doe@example.com', '$2a$10$JohnPasswordHash.', '+1234567892', 'USER', true, true, NOW(), NOW()),
('u4', 'Jane Smith', 'jane.smith@example.com', '$2a$10$JanePasswordHash.', '+1234567893', 'USER', true, false, NOW(), NOW()),
('u5', 'Mike Johnson', 'mike.johnson@example.com', '$2a$10$MikePasswordHash.', '+1234567894', 'USER', true, true, NOW(), NOW());

-- Insert subscription plans
INSERT INTO subscription_plans (id, name, description, price, meals_per_day, meals_per_week, is_active, created_at, updated_at) VALUES
('sp1', 'Essential Plan', 'Perfect for individuals who want fresh, healthy meals', 99.00, 1, 5, true, NOW(), NOW()),
('sp2', 'Family Plan', 'Great for families with diverse meal preferences', 179.00, 2, 10, true, NOW(), NOW()),
('sp3', 'Premium Plan', 'For food enthusiasts who want gourmet experiences', 249.00, 3, 15, true, NOW(), NOW());

-- Insert delivery addresses
INSERT INTO delivery_addresses (id, user_id, street_address, city, state, postal_code, country, is_default, created_at, updated_at) VALUES
('da1', 'u2', '123 Main St', 'New York', 'NY', '10001', 'USA', true, NOW(), NOW()),
('da2', 'u3', '456 Oak Ave', 'Los Angeles', 'CA', '90210', 'USA', true, NOW(), NOW()),
('da3', 'u4', '789 Pine Rd', 'Chicago', 'IL', '60601', 'USA', true, NOW(), NOW()),
('da4', 'u5', '321 Elm St', 'Houston', 'TX', '77001', 'USA', true, NOW(), NOW());

-- Insert sample products
INSERT INTO products (id, name, description, price, category, product_type, calories, prep_time_minutes, servings, rating, rating_count, image_url, is_enabled, is_featured, availability_status, sort_order, created_at, updated_at) VALUES
('p1', 'Mediterranean Bowl', 'Fresh quinoa bowl with grilled vegetables, feta cheese, and olive oil dressing', 14.99, 'LUNCH', 'VEG', 450, 15, 1, 4.5, 120, 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop', true, true, 'AVAILABLE', 1, NOW(), NOW()),
('p2', 'Grilled Salmon', 'Atlantic salmon grilled to perfection with lemon herbs and roasted vegetables', 18.99, 'DINNER', 'NON_VEG', 520, 20, 1, 4.7, 85, 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop', true, true, 'AVAILABLE', 2, NOW(), NOW()),
('p3', 'Thai Green Curry', 'Authentic Thai curry with coconut milk, vegetables, and jasmine rice', 16.99, 'DINNER', 'VEGAN', 480, 25, 1, 4.3, 95, 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=300&h=200&fit=crop', true, false, 'AVAILABLE', 3, NOW(), NOW()),
('p4', 'Caesar Salad', 'Crisp romaine lettuce with parmesan, croutons, and classic Caesar dressing', 12.99, 'LUNCH', 'VEG', 320, 10, 1, 4.1, 75, 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop', true, false, 'AVAILABLE', 4, NOW(), NOW()),
('p5', 'Avocado Toast', 'Multigrain bread topped with smashed avocado, cherry tomatoes, and seeds', 9.99, 'BREAKFAST', 'VEGAN', 380, 8, 1, 4.4, 110, 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=300&h=200&fit=crop', true, true, 'AVAILABLE', 5, NOW(), NOW()),
('p6', 'Chicken Burrito Bowl', 'Grilled chicken with cilantro rice, black beans, corn, and salsa', 15.99, 'LUNCH', 'NON_VEG', 580, 15, 1, 4.6, 140, 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop', true, true, 'AVAILABLE', 6, NOW(), NOW()),
('p7', 'Protein Smoothie', 'Blend of banana, berries, protein powder, and almond milk', 8.99, 'BEVERAGES', 'VEG', 280, 5, 1, 4.2, 88, 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300&h=200&fit=crop', true, false, 'AVAILABLE', 7, NOW(), NOW()),
('p8', 'Chocolate Brownie', 'Rich dark chocolate brownie with walnuts', 6.99, 'DESSERTS', 'VEG', 420, 25, 1, 4.8, 200, 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=300&h=200&fit=crop', true, true, 'AVAILABLE', 8, NOW(), NOW());

-- Insert product tags
INSERT INTO product_tags (product_id, tag) VALUES
('p1', 'healthy'), ('p1', 'mediterranean'), ('p1', 'quinoa'),
('p2', 'protein'), ('p2', 'omega-3'), ('p2', 'grilled'),
('p3', 'spicy'), ('p3', 'thai'), ('p3', 'coconut'), ('p3', 'vegan'),
('p4', 'salad'), ('p4', 'classic'), ('p4', 'crispy'),
('p5', 'healthy'), ('p5', 'avocado'), ('p5', 'breakfast'),
('p6', 'mexican'), ('p6', 'protein'), ('p6', 'rice bowl'),
('p7', 'protein'), ('p7', 'smoothie'), ('p7', 'post-workout'),
('p8', 'chocolate'), ('p8', 'dessert'), ('p8', 'sweet');

-- Insert product ingredients
INSERT INTO product_ingredients (product_id, ingredient) VALUES
('p1', 'quinoa'), ('p1', 'bell peppers'), ('p1', 'feta cheese'), ('p1', 'olive oil'), ('p1', 'herbs'),
('p2', 'salmon'), ('p2', 'lemon'), ('p2', 'herbs'), ('p2', 'broccoli'), ('p2', 'carrots'),
('p3', 'coconut milk'), ('p3', 'green curry paste'), ('p3', 'vegetables'), ('p3', 'jasmine rice'),
('p4', 'romaine lettuce'), ('p4', 'parmesan'), ('p4', 'croutons'), ('p4', 'caesar dressing'),
('p5', 'multigrain bread'), ('p5', 'avocado'), ('p5', 'cherry tomatoes'), ('p5', 'seeds'),
('p6', 'grilled chicken'), ('p6', 'cilantro rice'), ('p6', 'black beans'), ('p6', 'corn'), ('p6', 'salsa'),
('p7', 'banana'), ('p7', 'mixed berries'), ('p7', 'protein powder'), ('p7', 'almond milk'),
('p8', 'dark chocolate'), ('p8', 'flour'), ('p8', 'walnuts'), ('p8', 'butter'), ('p8', 'sugar');

-- Insert product allergens
INSERT INTO product_allergens (product_id, allergen) VALUES
('p1', 'dairy'),
('p2', 'fish'),
('p4', 'dairy'), ('p4', 'gluten'),
('p5', 'gluten'),
('p7', 'nuts'),
('p8', 'dairy'), ('p8', 'gluten'), ('p8', 'nuts');

-- Insert user subscriptions
INSERT INTO user_subscriptions (id, user_id, plan_id, status, start_date, end_date, next_delivery_date, meal_preference, delivery_address_id, auto_renewal, created_at, updated_at) VALUES
('us1', 'u2', 'sp1', 'ACTIVE', '2024-01-15', '2024-12-15', '2024-02-01', 'MIXED', 'da1', true, NOW(), NOW()),
('us2', 'u3', 'sp2', 'ACTIVE', '2024-01-10', '2024-12-10', '2024-02-02', 'VEG', 'da2', true, NOW(), NOW()),
('us3', 'u4', 'sp1', 'PAUSED', '2024-01-20', '2024-12-20', '2024-02-05', 'NON_VEG', 'da3', false, NOW(), NOW()),
('us4', 'u5', 'sp3', 'ACTIVE', '2024-01-25', '2024-12-25', '2024-02-03', 'MIXED', 'da4', true, NOW(), NOW());

-- Insert subscription delivery days
INSERT INTO subscription_delivery_days (subscription_id, delivery_day) VALUES
('us1', 'MONDAY'), ('us1', 'WEDNESDAY'), ('us1', 'FRIDAY'),
('us2', 'TUESDAY'), ('us2', 'THURSDAY'), ('us2', 'SATURDAY'),
('us3', 'MONDAY'), ('us3', 'FRIDAY'),
('us4', 'MONDAY'), ('us4', 'WEDNESDAY'), ('us4', 'FRIDAY'), ('us4', 'SUNDAY');

-- Insert sample orders
INSERT INTO orders (id, user_id, subscription_id, order_number, order_date, delivery_date, status, subtotal, tax, delivery_fee, discount, total_amount, payment_status, delivery_address_id, created_at, updated_at) VALUES
('o1', 'u2', 'us1', 'ORD1001', '2024-01-10', '2024-01-12', 'DELIVERED', 29.98, 2.40, 3.99, 0.00, 36.37, 'COMPLETED', 'da1', '2024-01-10 10:00:00', NOW()),
('o2', 'u3', 'us2', 'ORD1002', '2024-01-11', '2024-01-13', 'IN_TRANSIT', 26.98, 2.16, 3.99, 5.00, 28.13, 'COMPLETED', 'da2', '2024-01-11 11:00:00', NOW()),
('o3', 'u4', 'us3', 'ORD1003', '2024-01-12', '2024-01-14', 'PREPARING', 18.99, 1.52, 3.99, 0.00, 24.50, 'COMPLETED', 'da3', '2024-01-12 09:30:00', NOW()),
('o4', 'u5', 'us4', 'ORD1004', '2024-01-13', '2024-01-15', 'SCHEDULED', 34.97, 2.80, 3.99, 0.00, 41.76, 'PENDING', 'da4', '2024-01-13 14:15:00', NOW()),
('o5', 'u2', 'us1', 'ORD1005', '2024-01-14', '2024-01-16', 'DELIVERED', 15.99, 1.28, 3.99, 0.00, 21.26, 'COMPLETED', 'da1', '2024-01-14 16:00:00', NOW());

-- Insert order items
INSERT INTO order_items (id, order_id, product_id, quantity, unit_price, total_price, created_at, updated_at) VALUES
('oi1', 'o1', 'p1', 1, 14.99, 14.99, NOW(), NOW()),
('oi2', 'o1', 'p2', 1, 14.99, 14.99, NOW(), NOW()),
('oi3', 'o2', 'p4', 1, 12.99, 12.99, NOW(), NOW()),
('oi4', 'o2', 'p3', 1, 13.99, 13.99, NOW(), NOW()),
('oi5', 'o3', 'p2', 1, 18.99, 18.99, NOW(), NOW()),
('oi6', 'o4', 'p1', 1, 14.99, 14.99, NOW(), NOW()),
('oi7', 'o4', 'p6', 1, 15.99, 15.99, NOW(), NOW()),
('oi8', 'o4', 'p5', 1, 3.99, 3.99, NOW(), NOW()),
('oi9', 'o5', 'p6', 1, 15.99, 15.99, NOW(), NOW());

-- Insert payment history
INSERT INTO payment_history (id, user_id, order_id, amount, payment_method, payment_status, razorpay_payment_id, razorpay_order_id, created_at, updated_at) VALUES
('ph1', 'u2', 'o1', 36.37, 'CREDIT_CARD', 'COMPLETED', 'pay_test1', 'order_test1', '2024-01-10 10:05:00', NOW()),
('ph2', 'u3', 'o2', 28.13, 'UPI', 'COMPLETED', 'pay_test2', 'order_test2', '2024-01-11 11:05:00', NOW()),
('ph3', 'u4', 'o3', 24.50, 'DEBIT_CARD', 'COMPLETED', 'pay_test3', 'order_test3', '2024-01-12 09:35:00', NOW()),
('ph4', 'u5', 'o4', 41.76, 'NET_BANKING', 'PENDING', NULL, 'order_test4', '2024-01-13 14:20:00', NOW()),
('ph5', 'u2', 'o5', 21.26, 'CREDIT_CARD', 'COMPLETED', 'pay_test5', 'order_test5', '2024-01-14 16:05:00', NOW());
