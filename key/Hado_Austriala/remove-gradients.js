import fs from 'fs';
import path from 'path';

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = walkSync(dir + '/' + file, filelist);
    } else {
      if (file.endsWith('.jsx')) {
         filelist.push(dir + '/' + file);
      }
    }
  });
  return filelist;
};

const files = walkSync('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Revert Text Gradients to solid Blue (#5278F6)
  content = content.replace(/text-transparent bg-clip-text bg-gradient-to-r from-\[\#5278F6\] to-\[\#E14AA8\]/g, 'text-[#5278F6]');
  
  // Revert Background Gradients to solid Blue (#5278F6)
  content = content.replace(/bg-gradient-to-r from-\[\#5278F6\] to-\[\#E14AA8\] border-none/g, 'bg-[#5278F6]');
  content = content.replace(/bg-gradient-to-r from-\[\#5278F6\] to-\[\#E14AA8\]/g, 'bg-[#5278F6]');
  
  // Remove background gradient effects from CtaSection
  content = content.replace(/bg-gradient-to-r from-\[\#5278F6\]\/10 to-\[\#020617\]/g, 'bg-[#0F172A]');
  
  // Also clean up any errant text-white in buttons that was forced by previous script
  content = content.replace(/bg-\[\#5278F6\] text-white/g, 'bg-[#5278F6] text-white');

  fs.writeFileSync(file, content);
});

console.log("Gradients stripped, solid colors applied!");
