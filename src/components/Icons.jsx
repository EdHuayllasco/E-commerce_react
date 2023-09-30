
import 'bootstrap-icons/font/bootstrap-icons.css';


const CustomIcon = ({name, size = 24, color = 'gray'}) => {
    let iconName;
    switch(name) {
        case 'user':
            iconName = "bi bi-person-circle" 
            break;
        case 'cart':        
            iconName = "bi bi-cart2" 
            break;
        case 'favorite':
            iconName = "bi bi-heart"
            break;
        case 'favorite-fill':
            iconName = "bi bi-heart-fill"
            break;
        case 'order':
            iconName = "bi bi-box"
            break;
        case 'menu':
            iconName = "bi bi-list"
            break
        case 'delete':
            iconName= "bi bi-x"
            break
        case 'logout':
            iconName = "bi bi-box-arrow-right"
            break
        default:
            iconName = '';

    }
    return  (
        <i className={iconName}  
            style={{ 
                fontSize: `${size}px`, 
                cursor:'pointer',
                color: color
            }}
        />
    )
}


export { 
    CustomIcon
}