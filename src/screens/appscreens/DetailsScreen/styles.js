import {StyleSheet} from 'react-native';
import fonts from '../../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingTop: 20, // Adds space near the status bar
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    marginRight: 16,
    marginTop: 5,
    width: 44,
    height: 44,
  },
  backIcon: {
    width: 44,
    height: 44,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily:fonts.Montserrat_SemiBold,
    position: 'absolute', // Centers the title properly
    left: 0,
    right: 0,
    textAlign: 'center',
    color:"#111B34"
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userName: {
    fontSize: 18,
    color:"#111B34",
    fontFamily:fonts.Montserrat_SemiBold,

  },
  description: {
    fontSize: 12,
    color: '#7E868C',
    fontFamily: fonts.Montserrat_Regular,
  },
  date: {
    marginLeft: 'auto',
    fontSize: 12,
    color: '#aaa',
  },
  productImageContainer: {
    position: 'relative',
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  heartIcon: {
    position: 'absolute',
    top: 32,
    right: 45,
  },
  likeIcon: {
    width: 42,
    height: 42,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewButton: {
    backgroundColor: '#ff6f61',
    position: 'absolute',
    right: 42,
    paddingVertical: 8,
    borderRadius: 8,
    width: 103,
    height: 32,
    justifyContent: 'center', // Vertically center the text
    alignItems: 'center', // Horizontally center the text
  },
  viewText: {
    color: '#fff',
    textAlign: 'center', // This will ensure text stays horizontally centered
  },
  productDescription: {
    padding: 16,
    fontSize: 14,
    color: '#666',
  },
  linkText: {
    color: '#ff6f61',
  },
  commentsList: {
    padding: 16,
  },
  commentContainer: {
    flexDirection: 'row',
    marginVertical: 5, // Adds spacing between comments
    paddingHorizontal: 10,
  },
  commentUserImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  commentBubble: {
    backgroundColor: '#ff6f61',
    paddingVertical: 10,
    paddingHorizontal: 12,
    maxWidth: '75%',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginBottom: 10, // Adds spacing between comments
    alignSelf: 'flex-start', // Align the bubble to the left
  },
  commentText: {
    color: '#fff',
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  commentInput: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#EBEBEB',
  },
  sendButton: {
    marginLeft: 12,
  },
  sendIcon: {
    width: 48,
    height: 48,
  },
});

export default styles;
