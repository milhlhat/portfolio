"use client";
import {Contact} from "../aggregates/domain-models/contact.model";
import {Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text} from "@chakra-ui/react";
import Link from "next/link";
type Props = {
    contact: Contact
}
export default function ContactPage(props: Props) {
    const {contact} = props;
    return (
        <article>
            <Card>
                <CardHeader>
                    <Heading size='md'>{contact.name}</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Phone
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                {contact.phone}
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Social
                            </Heading>
                            {contact.social.map((social, index) => (
                                <Link href={social.url} key={index}>
                                <Text  pt='2' fontSize='sm'>
                                    {social.name}
                                </Text>
                                </Link>
                            ))}

                        </Box>

                    </Stack>
                </CardBody>
            </Card>
        </article>
    )
}