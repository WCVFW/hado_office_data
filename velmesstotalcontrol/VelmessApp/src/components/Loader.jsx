import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';

const Loader = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="loader-overlay"
        >
            <div className="loader-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ position: 'relative', width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>

                    {/* Outer Ring */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            top: 0, left: 0, width: '100%', height: '100%',
                            borderRadius: '50%',
                            border: '3px solid transparent',
                            borderTopColor: 'var(--color-primary)',
                            borderRightColor: 'rgba(242, 116, 33, 0.2)',
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Middle Ring (Opposite) */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            width: '70%', height: '70%',
                            borderRadius: '50%',
                            border: '2px solid transparent',
                            borderBottomColor: 'var(--color-primary)',
                            borderLeftColor: 'rgba(242, 116, 33, 0.2)',
                            opacity: 0.8
                        }}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Center Icon */}
                    <motion.div
                        initial={{ opacity: 0.5, scale: 0.8 }}
                        animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            color: 'var(--color-primary)',
                            filter: 'drop-shadow(0 0 15px rgba(242, 116, 33, 0.4))',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                    >
                        <ChefHat size={32} strokeWidth={2.5} />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ textAlign: 'center' }}
                >
                    <h2 className="loader-text" style={{ marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1.1rem' }}>
                        Velmess
                    </h2>
                    <p className="loader-subtext" style={{ fontSize: '0.75rem', letterSpacing: '4px', textTransform: 'uppercase', opacity: 0.7 }}>
                        Total Control
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Loader;
