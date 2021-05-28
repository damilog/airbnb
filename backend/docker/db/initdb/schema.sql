DROP TABLE IF EXISTS `pyrodb`.`user` ;

CREATE TABLE `pyrodb`.`user` (
    `login` VARCHAR(50) NOT NULL PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS `pyrodb`.`room` ;

CREATE TABLE `pyrodb`.`room`
(
    id             INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    thumImage      VARCHAR(50),
    roomType       VARCHAR(50),
    roomName       VARCHAR(50),
    roomLabel      VARCHAR(50),
    publicAddress  VARCHAR(50),
    personCapacity VARCHAR(50),
    starRating     VARCHAR(50),
    reviewLabel    VARCHAR(50),

    latitude       FLOAT,
    longitude      FLOAT,

    price          INT,
    discount       FLOAT,
    cleaningFee    INT,
    serviceFee     INT,
    roomTax        FLOAT
);

INSERT INTO `pyrodb`.`room` (thumImage, roomType, roomName, roomLabel, publicAddress, personCapacity, starRating,
                           reviewLabel, latitude, longitude,
                           price, discount, cleaningFee, serviceFee, roomTax)
VALUES ("썸네일 이미지", "서초구의 아파트 전체", "Spacious and Comfortable Cozy house #4",
        "최대 인원 3명*원룸, 침대 1개, 욕실 1개*주방, 무선인터넷, 에어컨, 헤어드라이어",
        "Yeoksam 1(il)-dong, Gangnam-gu, 서울, 한국",
        3,
        4.80,
        "후기 127개", 37.4909, 127.0328, 130000, 0.96, 20000, 10000, 1.05);

INSERT INTO `pyrodb`.`room` (thumImage, roomType, roomName, roomLabel, publicAddress, personCapacity, starRating,
                           reviewLabel, latitude, longitude,
                           price, discount, cleaningFee, serviceFee, roomTax)
VALUES ("썸네일 이미지", "서초구의 아파트 전체", "Spacious and Comfortable Cozy house #4",
        "최대 인원 3명*원룸, 침대 1개, 욕실 1개*주방, 무선인터넷, 에어컨, 헤어드라이어",
        "Yeoksam 1(il)-dong, Gangnam-gu, 서울, 한국",
        3,
        4.80,
        "후기 127개", 37.4909, 127.0328, 130000, 0.96, 20000, 10000, 1.05);
