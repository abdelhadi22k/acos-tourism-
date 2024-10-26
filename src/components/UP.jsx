
import FileUploadSharpIcon from '@mui/icons-material/FileUploadSharp';


const MyComponent = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
     
      <button 
        onClick={scrollToTop} 
        style={{
          position: 'fixed', // لجعله عائمًا
          bottom: '20px',    // المسافة من أسفل الصفحة
          right: '20px',     // المسافة من يمين الصفحة
          backgroundColor: '#0D92F4', // لون الخلفية
          color: '#FFF',     // لون النص
          border: 'none',    // إزالة الحدود
          borderRadius: '120px', // لتدوير الزوايا
          padding: '10px 10px', // المسافة الداخلية
          cursor: 'pointer',  // تغيير شكل المؤشر عند المرور على الزر
        }}
      >
      <FileUploadSharpIcon sx={{ fontSize: 24, color: "#EDFCFF" }} />
      </button>
    </div>
  );
};

export default MyComponent;
