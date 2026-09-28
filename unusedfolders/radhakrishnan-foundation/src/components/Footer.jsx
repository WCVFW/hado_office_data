import React from 'react';


export default function Footer() {
    return (
        <footer style={{ padding: 16, textAlign: 'center', borderTop: '1px solid #e6e6e6', marginTop: 32 }}>
            © {new Date().getFullYear()} Radhakrishnan Foundation — All rights reserved.
        </footer>
    );
}